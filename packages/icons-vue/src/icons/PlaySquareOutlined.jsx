// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import PlaySquareOutlinedSvg from '@whalue-design/icons-svg/lib/asn/PlaySquareOutlined';

export default {
  name: 'IconPlaySquareOutlined',
  displayName: 'PlaySquareOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: PlaySquareOutlinedSvg } },
      children,
    ),
};