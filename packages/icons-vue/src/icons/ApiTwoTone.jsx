// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import ApiTwoToneSvg from '@whalue-design/icons-svg/lib/asn/ApiTwoTone';

export default {
  name: 'IconApiTwoTone',
  displayName: 'ApiTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ApiTwoToneSvg } },
      children,
    ),
};