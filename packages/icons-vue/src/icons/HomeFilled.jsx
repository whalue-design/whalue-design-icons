// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import HomeFilledSvg from '@whalue-design/icons-svg/lib/asn/HomeFilled';

export default {
  name: 'IconHomeFilled',
  displayName: 'HomeFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: HomeFilledSvg } },
      children,
    ),
};