// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import AndroidFilledSvg from '@whalue-design/icons-svg/lib/asn/AndroidFilled';

export default {
  name: 'IconAndroidFilled',
  displayName: 'AndroidFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: AndroidFilledSvg } },
      children,
    ),
};